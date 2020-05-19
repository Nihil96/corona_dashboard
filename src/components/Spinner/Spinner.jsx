import React from "react";
import { css } from "@emotion/core";
import DotLoader from "react-spinners/DotLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: auto;
  margin-top: 17rem;
  border-color: red;
`;

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <DotLoader
          css={override}
          size={50}
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Spinner;
