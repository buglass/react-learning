# Guidelines to component's files structure

Create your components inside the folder `./src/components/{COMPONENT_NAME}`.

- To build the component in React, you will need to define a file in `/{COMPONENT_NAME}.tsx`
- The component needs to have unit tests, and to do this you will define a `spec` file, named as `/{COMPONENT_NAME}.spec.tsx`
- To define the actions for this component, add a file `Actions.ts`
- To define the reducer for this component, add a file `Reducer.ts`
- For styling the component, add a file `Style.scss`
- For handling API calls, add a file `Service.ts`
- For helper methods, add a file `Scripts.ts`
- To define the API contracts, add a file `Requests.ts`
- Export the above members, from a file `Index.ts`
