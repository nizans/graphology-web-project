const htmlParserOptions = {
  replace: domNode => {
    if (domNode.attribs) {
      delete domNode.attribs['rtl;'];
      return domNode;
    }
  },
};

export default htmlParserOptions;
