import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./Loader.css";
import Windmill from "react-activity/dist/Windmill";
import { Colors } from "../colors/colors";
import styled from "styled-components";


const {
  primaryColor
} = Colors();

export const DefaultLoader: React.FC = () => {
  return (
    <div
      className="loader-container"
    >
      <div className="load">
        <span>...</span>
      </div>
    </div>
  )
};




type IProps = {
  count: number;
  circle?: boolean;
  height?: string | number;
};


export const SkeletonLoader = ({
  count,
  circle,
  height
}: IProps) => {


  return (

    <>
      <SkeletonTheme>
        <Skeleton
          count={count || 5}
          circle={circle}
          height={height || 8}
        />
      </SkeletonTheme>
    </>

  )
}

export const ActivityIndicator: React.FC = () => {


  return (
    <ActivityIndicatorWrapper>
      <Windmill color={primaryColor}></Windmill>
    </ActivityIndicatorWrapper>
  )
}

const ActivityIndicatorWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
`