import React from "react";

class ErrorBoundary extends React.Component {

    constructor(){
        super();
        this.state={
            hasError:false,
        }
    }
  componentDidCatch(error) {
      this.setState({hasError:true})
  }

  render() {
      if(this.state.hasError)
      {
          return <p>Something went Wrong.</p>
      }

     return this.this.props.children;
  }
}

export default ErrorBoundary;
