import React, { Component } from 'react'

 class AddProject extends Component {
     state={
         imageUrl:"",
         title:"",
         excerpt:"",
         body:"",
         submitMessage:"",
         submitMessageTextColor:"",
     };
     onChange=(event)=>{
        this.setState({
        [event.target.name] : event.target.value,
        });
    };
    onSubmit = (event) =>{
        event.preventDefault();
        let isSuccessful =true;
        // const {name}=this.state;
        if (isSuccessful){
            this.setState({
                submitMessage: `project succefully uploaded.`,
                submitMessageTextColor:"text-info"
            });
        }else {
            this.setState({
                submitMessage:"failed",
                submitMessageTextColor: "text-danger",
            });
        }
    };
    render() {
        const {submitMessage,submitMessageTextColor}= this.state;
        return (
           <div className="container my-5 py-5">
               <h1 className="text-center font-weight-light">
                   Add <span className="text-info">Project</span>
               </h1>
               <div className="row px-5">
                   <div className="col-12 col-lg-6">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group"  >
                            <label htmlFor="imageUrl">imageUrl</label>
                            <input
                                type="text"
                                name="imageUrl"
                                id="imageUrl"
                                className="form-control"
                                onChange={this.onChange}
                                required
                            />
                        </div> 
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="form-control"
                                onChange={this.onChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="excerpt">project details</label>
                            <input
                                type="text"
                                name="excerpt"
                                id="excerpt"
                                className="form-control"
                                onChange={this.onChange}
                                required
                            />
                        </div>    
                        <button
                            type="submit"
                            className="btn btn-dark my-5"
                            style={{backgroundColor:"Black"}}
                            >
                               Upload
                        </button>      
                    </form>
                    <div className="text-center">
                        <h5 className={submitMessageTextColor}>
                            {submitMessage}
                        </h5>
                    </div>
                </div>
               </div>
               
           </div>

        );
    }
}

export default AddProject;

