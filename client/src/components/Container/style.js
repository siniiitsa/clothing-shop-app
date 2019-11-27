import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const containerStyles = {
  container: {
    maxWidth: '1266px',
    margin: '0 auto'
  }
};

export const { classes } = jss.createStyleSheet(containerStyles).attach();
