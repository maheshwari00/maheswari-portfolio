import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

class RecommendationCard extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    const { name, designation, company, message } = this.props.recommendation;
    let str = message;
    if (message.length > 20) {
      str = message.slice(0, 20) + "...";
    }
    return (
      <div className="col-12 col-md-4">
        <a onClick={this.showModal}>
          <div className="card shadow h-100">
            <div className="card-body">
              <h4 className="card-text">{str}</h4>
              <p className="card-text text-secondary mb-0">{name}</p>
              <p className="card-text text-secondary">
                {designation} at {company}
              </p>
            </div>
          </div>
        </a>
        <Modal show={this.state.show} onHide={this.hideModal}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="card shadow h-100">
              <div className="card-body">
                <h4 className="card-text">{message}</h4>
                <p className="card-text text-secondary mb-0">{name}</p>
                <p className="card-text text-secondary">
                  {designation} at {company}
                </p>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default RecommendationCard;
