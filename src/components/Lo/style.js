import styled,{keyframes} from 'styled-components'
const loadingCircles = keyframes`
    from {
      background-color: #666;
      padding: 8px;
    }
    to {
      background: #DDD;
      padding: 0px;
    }
`;
export default styled.div`
    width:${props => props.boxSize+'px'};
    height:${props => props.boxSize+'px'};
    position: relative;

    & .spoke {
      position: absolute;
      border-radius: 100%;
      animation-name: ${loadingCircles};
      animation-iteration-count: infinite;
    }
`;
