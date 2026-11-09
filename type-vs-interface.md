# Type Alias vs Interface in TypeScript

When working with TypeScript, sometimes we need to describe the shape of an object. For example, when we have a user object with a name and an age. TypeScript gives us two ways to do this: type aliases and interfaces. At first, both may look the same, but there are some differences.

Let's start with an interface:

```
interface User {
  name: string;
  age: number;
}
```

We can write the same thing using a type alias:

```
type User = {
  name: string;
  age: number;
};
```

Both describe the same object shape. But there are differences.

The first difference is that an interface can be extended, and it also supports declaration merging. This means we can declare the same interface more than once, and TypeScript will combine their properties.

```
interface User {
  name: string;
}

interface User {
  age: number;
}

// User now has both name and age
```

A type alias does not support this kind of declaration merging. But it can do something an interface cannot do: represent types other than object shapes. For example, unions, primitives, and tuples.

```
type Status = "success" | "error";
type ID = string | number;
```

We can also combine object types using intersections with &, while interfaces can extend other compatible object types using extends.

## When should we use which one?

For defining object shapes, we would generally use an interface, especially when the type may need to be extended. But when working with unions, intersections, or other more complex type combinations, type is the better choice.

## Conclusion

So, both type aliases and interfaces can be used to describe object shapes, but they have some differences. We can use interfaces for defining object shapes, while type is more useful when working with different kinds of type combinations.