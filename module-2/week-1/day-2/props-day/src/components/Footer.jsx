function Footer({ name, age, owner }) {
  //destructuring props
  //   const { name, age, owner } = props;
  return (
    <footer>
      <h2>
        {name} is {age} years old and the owner is {owner}
      </h2>
    </footer>
  );
}

export default Footer;
