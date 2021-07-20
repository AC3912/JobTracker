// import { useEffect, useRef, useState } from "react";
// import { Route, Redirect, withRouter } from "react-router-dom";
// import { Auth } from "aws-amplify";
// import Routes from "./Routes";

// const PrivateRoute = withRouter((props) => {
//   const [loaded, setLoaded] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(null);
//   let unlisten = useRef(null);

//   const authenticate = () => {
//     Auth.currentAuthenticatedUser()
//       .then(() => {
//         setLoaded(true);
//         setIsAuthenticated(true);
//       })
//       .catch(() => props.history.push(Routes.LOGIN_PAGE));
//   };

//   useEffect(() => {
//     authenticate();
//     unlisten.current = props.history.listen(() => {
//       Auth.currentAuthenticatedUser()
//         .then((user) => true)
//         .catch(() => {
//           if (isAuthenticated) {
//             setIsAuthenticated(false);
//           }
//         });
//     });
//     return () => {
//       unlisten.current();
//     };
//   }, []);

//   const { component: Component, ...rest } = props;
//   if (!loaded) return null;
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: Routes.LOGIN_PAGE,
//             }}
//           />
//         );
//       }}
//     />
//   );
// });

// export default PrivateRoute;
