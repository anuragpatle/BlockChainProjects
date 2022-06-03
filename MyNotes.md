# 1. Use of useEffect

## Example 1: How to set an interval in React (with examples)

Using setInterval lets you execute a function at specific intervals. It's often very useful in React apps, for example for checking a condition regularly or fetching data every so often.

The code
Let's get straight to the code. This is how you use setInterval in a functional React component:

· · ·
useEffect(() => {
  const interval = setInterval(() => {
    console.log('This will be called every 2 seconds');
  }, 2000);

  return () => clearInterval(interval);
}, []);
· · ·
Read the rest of the article if you want the explanation of what's happening above!

How the setInterval code is working
There's three things to unpack:

Why is setInterval called inside a useEffect hook?
Why does the setInterval call look like that?
Why are we returning something from the useEffect hook?
Why is setInterval called inside a useEffect hook?
According to the React docs, "The Effect Hook lets you perform side effects in function components". And that's exactly what we want to do here.

You could ask what would happen if we declared it in the component itself. Let's see that with the most famous of examples, a counter!

Let's say we want a counter that starts out at 0, and goes up by 1 every second. Something like that:

Output:

Counter: 1
Counter: 2
Counter: 3
Counter: 4
Counter: 5


The way to implement this counter using the code in the beginning of the article is the following:

import { useState, useEffect } from 'react';

export default function ExampleCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
    </div>
  );
}

A pretty straightforward functional component that holds a state in counter. The state is incremented every second thanks to the setInterval defined in the useEffect. Great.

Now what happens if I get rid of the useEffect entirely?

import { useState } from 'react';

export default function ExampleCounter() {
  const [counter, setCounter] = useState(0);

  setInterval(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, 1000);

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
    </div>
  );
}
Well, this happens:

Output:

The counter will get incremented in random intervals with any value

Counter: 23
Counter: 2331
Counter: 2486
Counter: 3476

That's a crazy counter all right! Can you guess what happened?

As the setInterval is defined directly inside the function Component, it gets called every time the component renders! And when does the component render? On every state change! And when does the state change? When the interval callback is called.

Oops.

So yeah, put your side effects in useEffect hooks if you don't want to have them called every time the component renders!

Why does the setInterval call look like that?
This one is pretty easy: it's simply using the web API of setInterval. There's a number of functions defined for you in the web, that you can directly use. setInterval is one of them.

Simply look it up on Google, and you'll get an example of how to use it pretty fast!

The function takes two arguments:

The first is a function that will get called at specified intervals.
The second is the interval, in milliseconds.
Why are we returning something from the useEffect hook?
As a reminder, when we want to do some actions when a component is destroyed, we define it in a function which is returned in a useEffect.

A very common use case of this is clearing up effects like intervals.

Why do we need to clear intervals? Well, imagine we don't clear it. The component is destroyed, but the interval still runs! And it's trying to set a state that doesn't exist anymore.

This isn't too big of a deal by itself (React will just ignore it), but it's still a memory leak. Now imagine the component is created and destroyed again and again. You could get dozens of setIntervals running! Taken together, this could seriously slow down your app.

That's why the web API that gives us setInterval also provides us with a clearInterval function. And that's why you call it in the return statement of useEffect!

Wrapping up
I hope you have a better idea of how to use setInterval in React! It's a very useful tool to have in your box, but can lead to bugs when not used properly.
