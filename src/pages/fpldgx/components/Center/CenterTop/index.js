import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from './index.less'
import Jinhua from './Map/jinhua'


@connect(({ screencopy, loading }) => ({ screencopy, loading }))
class CenterTop extends PureComponent {

render(){
    const { screencopy } = this.props
    const { MAP_JHLDGX, JHLDGX } = screencopy

    let jhldgx = [],
        ldgxzs = [];


    if (MAP_JHLDGX) {
        const names = MAP_JHLDGX.map((data) => data.AREA_NAME);
        let name = Array.from(new Set(names));
        name.map(da => {
            let obj = {
                name: da,
                data: [],
                value: '',
                val: []
            };
            jhldgx.push(obj);
        });
        MAP_JHLDGX.map(item => {
            let ind = name.indexOf(item.AREA_NAME);
            if (ind > -1) {
                let obj = {
                    name: item.KPI_CLASS,
                    value: +item.KPI_VALUE
                };
                jhldgx[ind].data.push(obj);

                if (item.KPI_CLASS === '劳动关系指数') {
                    jhldgx[ind].value = +item.KPI_VALUE.toFixed(0)
                }
            }
        });
        jhldgx.map(item => {
            if (item.name === '婺城区') {
                item.val = [119.47150, 28.95024, item.value]; //婺城区
            } else if (item.name === '武义县') {
                item.val = [119.66651, 28.69260, item.value]; //武义县
            } else if (item.name === '兰溪市') {
                item.val = [119.58051, 29.35838, item.value]; //兰溪市
            } else if (item.name === '金东区') {
                item.val = [119.79311, 29.19914, item.value]; //金东区
            } else if (item.name === '浦江县') {
                item.val = [119.89906, 29.65251, item.value]; //浦江县
            } else if (item.name === '永康市') {
                item.val = [120.08731, 28.94851, item.value]; //永康市
            } else if (item.name === '义乌市') {
                item.val = [120.07468, 29.40558, item.value]; //义乌市
            } else if (item.name === '东阳市') {
                item.val = [120.34191, 29.28946, item.value]; //东阳市
            } else if (item.name === '磐安县') {
                item.val = [120.55022, 29.05403, item.value]; //磐安县
            }
        })
    }

    if (JHLDGX && JHLDGX.length > 0) {
        ldgxzs = {
            name: JHLDGX[0].KPI_CLASS,
            value: JHLDGX[0]['T.KPI_VALUE||T.KPI_UNIT'] || ''
        }
    }

    let ldgxOption = {
        textSize: 16,
        textLineheight: 20,
        numSize: 32,
        numLineheight: 36,
    };

    return (
        <div className={styles.centerTop} >
            <div className={styles.title}>
                <b className={styles.bagLabel}>{ldgxzs.value}</b>
                <p>劳动关系和谐指数</p>
            </div>
            {/* <h2>
                金华劳动关系指数：<b className={styles.bagLabel}>{ldgxzs.value}</b>
            </h2> */}
            <div className={styles.dz}>
                <div>
                    <Jinhua jhldgx={jhldgx} ldgxOption={ldgxOption} />
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
