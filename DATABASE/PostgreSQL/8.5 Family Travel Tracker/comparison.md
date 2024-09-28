The first code is generally better for several reasons:

### 1. **Modularity**:

- **First Code**: Breaks down complex tasks into smaller helper functions like `checkVisisted()` and `getCurrentUser()`. This separation makes the code more readable and easier to maintain. If changes are needed to user data retrieval or country data retrieval, you only need to modify the corresponding function rather than multiple locations throughout the code.
- **Second Code**: Contains more embedded logic directly inside route handlers, which can make it harder to manage as the application grows. Modifying or debugging code that spans multiple locations can become difficult, especially with redundant logic.

### 2. **Scalability**:

- **First Code**: Due to its modularity, it scales better. Adding new features like additional user attributes or complex business logic around visited countries would be easier to implement without cluttering the route handlers.
- **Second Code**: As the complexity of the application increases, the inline queries and logic can make it harder to scale effectively. Each new feature would require careful placement of additional code inside existing routes, leading to potential duplication.

### 3. **Separation of Concerns**:

- **First Code**: Keeps concerns separate. For example, user-related functionality is encapsulated in `getCurrentUser()` and country-related functionality in `checkVisisted()`. This separation improves maintainability and testing since each function can be independently tested.
- **Second Code**: Combines logic in the route handlers, increasing the likelihood of mixing concerns. This can lead to less reusable code and more difficulty isolating bugs.

### 4. **Code Readability**:

- **First Code**: Is more readable because the logical flow is clearer. The helper functions are descriptive, making it easy to understand what each piece of code does without reading through SQL queries inside route handlers.
- **Second Code**: Requires more attention to detail when reading through route handlers because everything is embedded in a single place. While this may be simpler for small applications, it can become overwhelming as more functionality is added.

### 5. **Maintainability**:

- **First Code**: Easier to maintain since the functionality is organized into distinct parts. Fixing bugs, optimizing queries, or adding new features can be done with minimal risk of introducing side effects in unrelated code.
- **Second Code**: As complexity grows, maintenance can become cumbersome due to repetitive code and less organized structure. Refactoring would likely require more effort.

### 6. **Reusability**:

- **First Code**: By using helper functions, you can easily reuse logic throughout the application. For example, you could reuse the `getCurrentUser()` function in other routes that need user information without duplicating code.
- **Second Code**: The direct embedding of queries and logic into route handlers reduces reusability. If you need similar functionality elsewhere, you may end up copying and pasting code.

### 7. **Error Handling**:

- **First Code**: Error handling is more localized within the helper functions, making it easier to extend and centralize the way errors are managed.
- **Second Code**: Handles errors in a more ad-hoc way directly in route handlers, making it harder to provide consistent error messages or logging across different parts of the application.

### Conclusion:

The **first code** is better due to its modular structure, maintainability, scalability, and clear separation of concerns. It’s more suited for growth and future enhancements, making it a better choice for any application that is expected to evolve.
