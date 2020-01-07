origin BOOK Gang of 4: design patterns: Elements of reusable object-oriented software, published 1994, Erich Gammer, Richard Helm

design patterns - are advanced technics that helps us improve the way we write code and to write more scalable solutions;

way: restructure solutions onto parts that communicate with each other;
    sonme parts are designed to be the same, when the others designed to grow, change or expand;

benefits:
    proven solutions;
    well tested;
    documented, so developers can learn them and be on the same page
    makes app less brittle
    makes app scalable
    simplify code and reduce complexity of app

Design pattern essentials:
pattern name
the problem
the solution
consequences



anti-patterns
    example:
        -modify prototype of an instance
            person.__proto__.address = {}
        -nodeJS: sync execution after app inited (JS is 1-threaded) - fs.fileReadSync
        -callback hell/chaos


patterns:

creational:
    singleton
    prototype
        prototype clone method
    factory
    builder
        implementing builder


structural:
    adapter
    proxy
    composite
    decorator

    facade
    bridge


behavioral:
    chain of responsibility
        implementing storage class
    state
    command
    iterator
    observer
    strategy

    mediator
    template method
    visitor


other (JS)
    module
    Revealing Module
    Revealing Constructor
    Callback
    Middleware
    Reactor
    Blockchain
    Schedule
    Publisher Subscriber