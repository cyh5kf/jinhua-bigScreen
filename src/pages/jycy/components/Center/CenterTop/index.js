import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from './index.less'


@connect(({ screen, loading }) => ({ screen, loading }))
class CenterTop extends PureComponent {

render(){
    return (
        <div className={styles.centerTop} >
            <h2 style={{ height: '100px', color: '#fff', padding: '10px 30px', fontSize: "0.2rem",
        fontWeight: "500"}}>
                金华劳动关系指数：
            </h2>
            <div className={styles.dz}>
                <div style={{border:'1px solid red',width:"560px",height:'200px',marginTop:'100px',marginLeft:'210px',position:'relative'}}>
                    <div style={{ position: 'absolute',top:'2px',left:'190px',border:'1px solid yellow'}}>
                        <img src={require("../../../../../assets/images/劳动关系切图/浦江/web/1.png")} alt="" ></img>
                    </div>
                    <div style={{ position: 'absolute', top: '20px', left: '35px' ,border: '1px solid yellow'}}>
                        <img src={require("../../../../../assets/images/劳动关系切图/兰溪/web/1.png")} alt="" ></img>
                    </div>
                    <div style={{ position: 'absolute', top: '16px', left: '217px', border: '1px solid yellow' }}>
                        <img src={require("../../../../../assets/images/劳动关系切图/义乌/web/1.png")} alt="" ></img>
                    </div>
                    <div style={{ position: 'absolute', top: '42px', left: '-3px', border: '1px solid yellow' }}>
                        <img src={require("../../../../../assets/images/劳动关系切图/金华市/web/1.png")} alt="" ></img>
                    </div>
                    <div style={{ position: 'absolute', top: '78px', left: '21px', border: '1px solid yellow' }}>
                        <img src={require("../../../../../assets/images/劳动关系切图/武义/web/1.png")} alt="" ></img>
                    </div>
                    <div style={{ position: 'absolute', top: '22px', left: '289px', border: '1px solid yellow' }}>
                        <img src={require("../../../../../assets/images/劳动关系切图/东阳/web/1.png")} alt="" ></img>
                    </div>
                    <div style={{ position: 'absolute', top: '73px', left: '231px', border: '1px solid yellow' }}>
                        <img src={require("../../../../../assets/images/劳动关系切图/永康/web/1.png")} alt="" ></img>
                    </div>
                    <div style={{ position: 'absolute', top: '45px', left: '374px', border: '1px solid yellow' }}>
                        <img src={require("../../../../../assets/images/劳动关系切图/磐安/web/1.png")} alt="" ></img>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
      
                
    
}

CenterTop.propTypes = {
    loading: PropTypes.object,
}

export default CenterTop;

