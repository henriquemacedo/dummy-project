import React from "react";

import Wrapper from "@henriquemacedo/dummy-package/dist/wrapper";
import AwesomeCard from "@henriquemacedo/dummy-package/dist/awesome-card";

function App() {
  return (
    <Wrapper>
      <AwesomeCard
        title="Best Title"
        description="Today's your lucky day. Look around, kiddo - it's all yours. You are now the owner of this fine establishment. Free?"
      />
    </Wrapper>
  );
}

export default App;
