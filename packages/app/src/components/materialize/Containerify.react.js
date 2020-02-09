import React from 'react'

const Containerify = (ContainerContent) => {
  class ContainerifiedComponent extends React.PureComponent {
    render() {
      return (
        <div className="container">
          <ContainerContent />
        </div>
      )
    }
  }
  return ContainerifiedComponent
}

export default Containerify
