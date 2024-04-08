# The basic structure of e-commerce app

## Structure 
The project structure was built according to the Clean Architecture Approach and split by layers.

1. Application - it's an entry point into the shop, the glue between http framework and business logic
2. Domain - core of the show, all business logic is present here
3. Infrastructure - third-party services communications (stripe, paypal, braintree)

A lot of things was dropped by purpose such as Dependency Injection, Testing, etc..

## Payments

Payments were built according to a Strategy pattern, but instead of implementing a Strategy context, I'm using a Factory pattern to create a concrete strategy.

According to this implementation, we could add or disable concrete payment methods without changing a business logic.