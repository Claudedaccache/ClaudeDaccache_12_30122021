import { useParams } from 'react-router-dom';


/**
 * Component used to access the params and to be able to filter the data according to the param's id
 * @param {component} Component the home component
 * @returns component with the props and params 
 */
 const withRouter = (Component) => {
  const Wrapper = (props) => {
    const params = useParams();
    
    return (
      <Component
        params={params}
        {...props}
        />
    );
  };
  
  return Wrapper;
};

export default withRouter

