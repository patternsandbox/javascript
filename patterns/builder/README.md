# Builder Pattern
>Builder pattern separate the complexities of the creation logic from the final representation.

A builder pattern is a design pattern that lets us extract the object construction out of its own class (its representation) so that it can be used for multiple different representations. One advantage to using this pattern is that it lets us build objects with one operation on top of another where we don’t need to call all operations simultaneously, only the ones that are needed to produce a particular output. Ref: Ref: [Yash Sharma]

Builder pattern separates the `construction` of complex object which involve `computing multiple sequential operations` from its `representation`. It produces different representations of an object using the same construct

Builders allow us to construct complex objects by only specifying the type and content of the object, shielding us from the process of creating or representing the object explicitly. Ref. Ref: [Addy Osmani]

The builder design pattern is self-explanatory. It creates objects but it really shines when there is a need to create multiple objects with some similarities. A builder avoids the necessity to create myriad subclasses from a base class or big constructors with a lot of conditional logic using method chaining. Ref: Ref: [Log Rocket Eslam Hefnawy]

The parameters in the constructor are reduced and served in a much more readable way, and thus there is no need to pass in null for optional parameters to the constructor. Ref. Ref: [Itay Elgazar]

## References
- [Jsmanifest]
- [Yash Sharma]
- [Do Factory]
- [Weekly Web Tips]
- [Addy Osmani]
- [Carlos Caballero]
- [Eslam Hefnawy]
- [Itay Elgazar]
- [Refactoring Guru]

[Jsmanifest]: https://jsmanifest.com/the-builder-pattern-in-javascript/
[Yash Sharma]: https://codeburst.io/builder-pattern-in-javascript-e5b13e4e51af
[Do Factory]: https://www.dofactory.com/javascript/design-patterns/builder
[Weekly Web Tips]: https://medium.com/weekly-webtips/the-builder-design-pattern-a7c9e6429fb7
[Addy Osmani]: https://addyosmani.com/resources/essentialjsdesignpatterns/book/
[Carlos Caballero]: https://www.carloscaballero.io/understanding-design-patterns-builder/
[Eslam Hefnawy]: https://blog.logrocket.com/how-typescraddyipt-design-patterns-help-you-write-better-code/
[Itay Elgazar]: https://hashnode.com/post/the-builder-pattern-in-nodejs-and-typescript-cjrd2a0i000gz8ps1adi47mpx
[Refactoring Guru]: https://refactoring.guru/design-patterns/builder
