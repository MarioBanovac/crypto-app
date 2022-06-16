import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import { StyledFlexContainer, ContentContainer } from "ui";
import { formatURL } from "utils";
import { ReactComponent as CopyIcon } from "icons/copy.svg";

export default function CoinLinks(props) {
  const theme = useTheme();
  const { coinLinks } = props;
  const notify = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Link copied to clipboard !", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  return (
    <StyledFlexContainer
      maxWidth="100%"
      alignItems="center"
      flexWrap="wrap"
      margin="0 0 54px 0"
    >
      <ContentContainer
        minWidth="462px"
        height="64px"
        borderRadius="12px"
        margin="0 19px 10px 0"
        alignItems="center"
        justifyContent="space-between"
        padding="22px"
        flex="1"
      >
        <a href={`http://${formatURL(coinLinks[0])}`} target="_blank">
          <FontAwesomeIcon icon={faLink} size={"xs"} fixedWidth />
        </a>
        {formatURL(coinLinks[0])}
        <a>
          <CopyIcon onClick={() => notify(coinLinks[0])} />
        </a>
      </ContentContainer>
      <ContentContainer
        minWidth="462px"
        height="64px"
        borderRadius="12px"
        margin="0 0 10px 0"
        alignItems="center"
        justifyContent="space-between"
        padding="22px"
        flex="1"
      >
        <a href={`http://${formatURL(coinLinks[1])}`} target="_blank">
          <FontAwesomeIcon icon={faLink} size={"xs"} fixedWidth />
        </a>
        {formatURL(coinLinks[1])}
        <a>
          <CopyIcon onClick={() => notify(coinLinks[1])} />
        </a>
      </ContentContainer>
      <ContentContainer
        minWidth="462px"
        height="64px"
        borderRadius="12px"
        margin="0 0 10px 0"
        alignItems="center"
        justifyContent="space-between"
        padding="22px"
        flex="1"
      >
        <a href={`http://${formatURL(coinLinks[2])}`} target="_blank">
          <FontAwesomeIcon icon={faLink} size={"xs"} fixedWidth />
        </a>
        {formatURL(coinLinks[2])}
        <a>
          <CopyIcon onClick={() => notify(coinLinks[2])} />
        </a>
      </ContentContainer>
      <ToastContainer
        toastStyle={{backgroundColor:theme.main,color:theme.mainPositive}}
        autoClose={2000}
      />
    </StyledFlexContainer>
  );
}
