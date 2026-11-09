# any, unknown, and never in TypeScript

When working with TypeScript, we will see special types: any, unknown, and never. They look similar, but they behave quite differently. But there are differences.

Let's start with any.

## What is any?

When we assign any to a variable, we tell TypeScript to stop checking that variable's type. We can assign anything to it and perform any operation without getting a type error.

```
let value: any = "Hello";

value = 25;
value.toUpperCase();
```

Here, TypeScript doesn't complain, even though calling toUpperCase() on a number would cause a runtime error.

Now comes unknown.

## What is unknown?

unknown is similar to any because it can hold any type of value. But there is a difference: TypeScript doesn't allow us to perform operations on it without checking i type first.

```
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

So, unlike any, unknown forces us to check the type before using the value. That's why unknown is always preferred over any.

## What is never?

Now comes the third one, never. It represen a value that should never exist. For example, a function that always throws an error or never finishes execution.

```
function throwError(): never {
  throw new Error("Something went wrong");
}
```

## Conclusion

So, any allows us to skip type checking, unknown forces us to check the type before using it, and never represents something that should never occur. Understanding these differences helps us write safer code in TypeScript.
