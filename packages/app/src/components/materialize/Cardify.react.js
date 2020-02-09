import React from 'react'

const Cardify = (CardContent) => (
  class CardifyComponent extends React.PureComponent {
    render() {
      return (
        <div className="card">
          <div className="card-content">
            <CardContent />
          </div>
        </div>
      )
    }
  }
)

export default Cardify
