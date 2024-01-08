# E3: Laying the Foundation!

1.  What is JSX ?

    JSX is JavaScript XML or HTML like syntax.
    JSX was a combination of JavaScript and HTML.
    JSX was introduced by FACEBOOK developers for the easiness of developers to implement react code.

    Ex: 

       ```htm
        const title = (
            <h1>
                Namaste React!
            </h1>
        )

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(title);
       ```
    
    Here, the JSX is from lines 12 to 16. If we log the variable title, it will return an JS object.

    JS Object is not understandable by the browser, so to make it understand, Parcel has a dependency BABEL, which will convert the JSX code to HTML Browser Understandable code which JS Engine understands and shows it in the web browser.

2.  Super Powers of JSX ?

    1.  JSX - JavaScript XML.
    2.  JSX provides user friendly coding standard at the industry level for coding react.
    3.  It is devloper friendly.
    4.  BABEL - Transpiles the JSX code to JS Code which browser understands and make life easier.
    5.  JSX has some coding standards that needs to be followed:

        1.  All the attributes needs to be in camelCase.

            ```htm
            <h1 tabIndex="5">Namaste React!</h1>
            ```
        
        2.  If you write multiple lines of JSX code, it has to be enclosed in the paranthesis.

            ```htm
            const title = (
                <h1>
                    Namaste React!
                    <span>Welcome!!</span>
                </h1> 
            )
            ```

        3. We can react functional components and class components

            Ex: Functional Component.

            Functional Component is nothing but the functions in Javascript that would return JavaScript Code or react element.

            ```htm
            const Title = () => {
                <h1>Hi I am a Functional Component!</h1>
            }

            const root = ReactDOM.createRoot(document.getElementById("root"));
            root.render(<Title />);
            ```
        
        4.  We can place react element inside a react component.

            Ex:

                ```htm
                const title = <h1>I am react element </h1> // React Element;

                const Component = () => { // React Functional Component.
                    return (
                        <div className="container">
                            {title}
                            <span>Welcome to React Course!</span>
                        </div>
                    )
                }
                ```
            
        5.  We can place a react component inside a react element.

            Ex:

                ```htm
                    const Component = () => { // React Functional Component.
                        return (
                            <div className="container">
                                <span>Welcome to React Course!</span>
                            </div>
                        )
                    }

                    // React Element;
                    const title = (
                        <h1>
                            I am react element!
                            <Component />
                        </h1>
                    )
                ```
        6.  JSX takes care of the Injection ( Cross site attacks ) Attacks.

        7. JSX can execute an JS code or JS expressions inside the {} curly braces.

3.  Role of type attribute in script tag ? What options can I use there ?

    1.  type attribute is used to specify about the content placed inside the scripts tags.

        Ex: type="text/javascript"

        This type would intimate the viewer to get to know that the code written was JS or either some plain text.
    
    2.  type attribute is used to specify whether the file is of type module or not.

        Ex: type="module"

        If we are specify a react component / specific component to consider as a module then we can specify its type as module.
    
    3.  type attribute can have the value as nomodule.

        Ex: type="nomodule"

        If we want the application to be executed in the older versions of the browsers then we can specify its type as nomodule.

4.  {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent></TitleComponent>} in JSX ?

    Let us create a functional component in react using the name TitleComponent as specified.

    Ex:

        ```htm
        const TitleComponent = () => {
            return (
                <div className="container">
                    <span>Hi Welcome to React Series!</span>
                </div>
            )
        }

        const tileElement = (
            <h1>
                Hi I am a React Element!
                {TitleComponent}  --> 1
                {<TitleComponent></TitleComponent>} --> 2
            </h1>
        )

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(<TitleComponent />); --> 3
        ```

        In the above code block, points 1, 2, 3 will result in the same result.
        1 & 2.  Placed an react component inside an react element.
        3. Rendering the react component.   