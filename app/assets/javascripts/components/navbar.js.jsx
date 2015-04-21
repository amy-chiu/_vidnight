var Navbar = React.createClass({
  propTypes: {
    user: React.PropTypes.object
  },

  render: function() {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <a class="navbar-brand" href="#">Vidnight</a>
          </div>
        </div>
      </nav>
    );
  }
});