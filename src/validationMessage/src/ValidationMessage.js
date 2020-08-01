import { Box } from "../../box";
import { Text } from "../../typography";

const ValidationMessage = ({ validationMessage }) => {
  if (validationMessage) {
    return (
      <Box m="spacing.2">
        <Text color="tint.red" fontWeight={800} size={400}>
          ↳ {validationMessage}
        </Text>
      </Box>
    );
  } else {
    return null;
  }
};

export default ValidationMessage;
