import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RightFirst from './RightFirst'
import RightSecond from './RightSecond'
import RightThird from './RightThird'
import styles from './RightSide.less'


class RightSide extends PureComponent {

    render() {
        return (
            <div style={{marginTop:'0px'}}>
                {/* <div style={{display:'flex',width:'400px',border:'1px solid red',height:'60px',padding:'20px' }}>
                    <div style={{ width: '89px', height: '32px', border: '1px solid rgba(3,8,49,1)', marginLeft:'40px'}}>1</div>
                    <div style={{ width: '89px', height: '32px', border: '1px solid rgba(3,8,49,1)',marginLeft:'20px' }}>1</div>
                    <div style={{ width: '89px', height: '32px', border: '1px solid rgba(3,8,49,1)', marginLeft: '20px'}}>1</div>
                 </div> */}
                < div className={styles.flex_hasBg} >
                    <RightFirst />

                    <RightSecond />
                </div>
                < div className={styles.flex_hasBg}>
                    <RightThird />
                </div>


            </div>
        )
    }
}

RightSide.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default RightSide;

