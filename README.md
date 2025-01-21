
## react-button-disable

A lightweight and easy-to-use React package for managing button states during API calls. This package allows you to dynamically disable and enable buttons based on their unique IDs, ensuring a seamless user experience during asynchronous operations.
## Features

- Simple Integration: Easy setup with minimal boilerplate.
- Dynamic Button Control: Disable and enable buttons using unique IDs.
- React Context-Based: Centralized state management using React Context.
- Customizable: Extendable for various use cases in any React application.


## Installation

Install This Awesome Package With npm

```bash
  npm install react-button-disable
```
    

## Usage/Examples

Step 1: Wrap Your App with DisableBtnProvider
```
import React from 'react';
import { DisableBtnProvider } from 'react-button-disable';

function App() {
    return (
        <DisableBtnProvider>
            {/* Your application components */}
            <MainComponent />
        </DisableBtnProvider>
    );
}

export default App;
```

Step 2: Use the useDisableBtnContext Hook
## The hook provides:
- disableBtn(btnId) : Disables the button with the given I
- nableBtn(btnId) : Enables the button with the given ID.
- isBtnDisabled[btnId] : A boolean indicating the current disabled state of a button.

```
import React from 'react';
import { useReactDisableBtn } from 'react-button-disable';

const ExampleComponent = () => {
    const { isBtnDisabled, disableBtn, enableBtn } = useReactDisableBtn();

    const handleClick = async () => {
        const buttonId = "submitBtn";
        disableBtn(buttonId); // Disable the button
        try {
            // Simulate an API call
            await new Promise((resolve) => setTimeout(resolve, 2000));
            alert("API call successful!");
        } catch (error) {
            console.error("Error:", error);
        } finally {
            enableBtn(buttonId); // Enable the button after the API call
        }
    };

    return (
        <button
            id="submitBtn"
            onClick={handleClick}
            disabled={isBtnDisabled["submitBtn"] || false}
        >
            Submit
        </button>
    );
};

export default ExampleComponent;

```





## Authors

- [@PatelSharan](https://github.com/PatelSharan)
## License

[MIT](https://choosealicense.com/licenses/mit/)

