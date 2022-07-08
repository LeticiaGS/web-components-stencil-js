# Stencil App Starter

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

## Learnings
- When you initialize the variable you don't need to declare its type
- The Host unlike the div, it serves to wrap the elements but is not rendered in the html
- When i push my new task array it doesnt update state. To solve this, we created a new array with everything we had in the other one (...this,task) and adc my new task (ev.detail)
```typescript

handleAdd = (ev: CustomEvent) => {
    this.tasks = [
     ...this.tasks,
      ev.detail
    ]
  }
```
- Whenever you are going to refer to a child event you need to put on+EventName (with CamelCase)
- It is necessary to transform the function into an **arrow function** because the browser executes it at some point, somehow, but it doesn't know that it refers to our TodoComponent class. With arrow function, the context of this will be based on where it was created, that is, its this will be referenced to the ToDoComponent

## Getting Started

To start a new project using Stencil, clone this repo to a new directory:

```bash
npm init stencil app
```

and run:

```bash
npm start
```

To build the app for production, run:

```bash
npm run build
```
