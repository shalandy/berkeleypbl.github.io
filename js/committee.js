Committee = React.createClass({
  render: function() {
    console.log(this.props.items); // passed as HTML tag`s argument
    console.log(this.props.children); // original tag children
    return (
      <ul>
        <li>React content</li>
      </ul>
    );
  },
});

document.registerReact('committee-page', Committee);
