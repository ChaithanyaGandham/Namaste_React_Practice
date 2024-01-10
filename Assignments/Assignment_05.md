# Let's get Hooked!

1.  **Difference between Named Export , Default export**

    -   There are two types of exports and imports.
        1.  Named Exports and Imports
        2.  Default Exports and Imports
    
    -   Named Exports:

        -   If we have to export multiple variables. Then Named Exports comes into the play.

        -   export const <name of the variable>   
    
    -   Named Imports:

        -   We need to wrap the named export with the curly braces.

        -   import { name of the variable } from ".../";
    
    -   Default Exports:

        -   When we need to export a single functional component or a variable. We use default exports.

        -   export default Componentname.
    
    -   Default Imports:

        -   When we need to import a default functional component or a variable we should not wrap it with the curly braces.

        -   import componentname from "../";

2. **What is importance of config.js file**

    -   config.js file is used to store some JSON data which are used for the utils of the application.

3.  **What are React hooks and why do we need a useState Hook?**

    -   Most important hooks in react was 
        1.  useState
        2.  useEffect
    
    **useState**
    -   useState is used for the DOM manipulations.
    -   useState is a named import.
    -   useState is used to create a super powerful state variable.
    -   useState is name as apt, because it maintains the state of the component.
    -   we have a array destructuring for the name of the state variable and the setter function.

        const [ title, setTitle] = useState("");

    -   Whenever there is a change or update in the state, react re renders the component with the upadated changes.
    -   Behind the scenes, on change in the state variable, there exists a use of diffing algorithm which virtual DOM uses.
    -   In the recent times, React Fiber was used to find the difference between the JS objects from the virtual DOM of previous and current Object.