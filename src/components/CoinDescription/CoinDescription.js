import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { ContentContainer, StyledFlexContainer, StyledParagraph } from "ui";
import { isEmpty } from "utils";

export default function CoinDescription(props) {
  const { description } = props;
  const hasDescription = !isEmpty(description);
  return (
    <>
      {hasDescription ? (
        <>
          <h2>Description</h2>
          <ContentContainer
            width="1394px"
            height="auto"
            margin="0 0 28px 0"
            borderRadius="12px"
            padding="30px 27px 109px 27px"
          >
            <StyledFlexContainer
              width="100%"
              flexDirection="column"
              alignItems="center"
            >
              <FontAwesomeIcon icon={faLayerGroup} size={"lg"} />
              <StyledParagraph
                lineHeight="1.3"
                dangerouslySetInnerHTML={{ __html: description }}
                fontSize="19px"
                margin="31px 0 0 0"
              ></StyledParagraph>
            </StyledFlexContainer>
          </ContentContainer>
        </>
      ) : null}
    </>
  );
}
