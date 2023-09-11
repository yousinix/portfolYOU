## Customization

Simply **override** the file you want to change by matching the **same file name and path**.  

**Example 1:** New Favicon

1. Generate your own using [favicon](https://favicon.io/) or any other tool.
1. Copy your new `favicon.ico` file into your own project with the same file path **`assets/favicon.ico`**.

**Example 2:** Custom Style

1. Create **`assets/css/style.scss`**.
1. Add the following lines:

    ```css
    ---
    ---
    /* Add your custom style here */
    @import "portfolYOU";
    ```
