import React,{ Component } from "react";
class Contact extends Component{
    constructor(){
          super();
          this.state={
              name: "",
              email: "",
              description: "",
              submitMessage:"",
              submitMessageTextColor:"",
          };
    }  
    onChange=(event)=>{
        this.setState({
        [event.target.name] : event.target.value,
        });
    };
    onSubmit = (event) =>{
        event.preventDefault();
        let isSuccessful =true;
        const {name}=this.state;
        if (isSuccessful){
            this.setState({
                submitMessage: `Thank you ${name} i will contact you soon.`,
                submitMessageTextColor:"text-info"
            });
        }else {
            this.setState({
                submitMessage:"oops! something went wrong.please try again later",
                submitMessageTextColor: "text-danger",
            });
        }
    };
  render(){
      const {submitMessage,submitMessageTextColor}= this.state;
    return (
        <div className="container my-5">
            <h1 className="font-weight-light text-center py-5">
                <span className="text-info">Thank you</span>for your interest
            </h1>
            <div className="row justify-content-center">
                <div className="col=11 col-lg-5">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input 
                                type="text" 
                                name="name" 
                                className="form-control"
                                onChange={this.onChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" onChange={this.onChange}>Email</label>
                            <input type="email" name="email" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">
                                Tell me about your project
                            </label>
                            <textarea
                                className="form-control"
                                name="description"
                                rows="5"
                                onChange={this.onChange}
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-dark float-right"
                            style={{backgroundColor:"Black"}}
                            >
                                let's talk bussiness
                            </button>
                    </form>
                </div>
                <div className="py-5 mx-2 text-center">
                    <h5 className={submitMessageTextColor}>
                        {submitMessage}
                    </h5>
                </div>
            </div>
        </div>
    );
  }
}
export default Contact;