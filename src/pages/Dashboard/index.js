import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CircularProgress } from '@material-ui/core';
import Chart from "react-google-charts";

import { load, setTitle } from './store/ducks';


export const Dashboard = ({ data, load, setTitle }) => {
    useEffect(() => {
        // localStorage.getItem('access') && load();

        setTitle('Dashboard');
    }, [load, setTitle]);

    const options = {
        legend: "none",
        chartArea: { width: '75%' },
        bar: { groupHeight: "10" },
        fontSize: 8,
        animation: {
            duration: 1000,
            startup: true,
        }
    };

    return (
        data !== {} ? (
            <div style={{
                backgroundColor: 'white',
                padding: 5,
                borderRadius: 10,
                height: 'calc(100vh - 100px)',
                overflowY: 'auto'
            }}>
                <div style={{ padding: 15 }}>
                    <div style={{ marginBottom: 10 }}>
                        <div style={{ fontSize: 16, textAlign: 'center' }}>
                            Quantidade de roteirização por cliente
                        </div>

                        <Chart
                            chartType="AreaChart"
                            width="100%"
                            height='calc(100vh - 240px)'
                            data={data['quantidades']}
                            options={{
                                ...options,
                                hAxis: {
                                    logScale: true
                                }
                            }}
                        />
                        <div style={{ fontSize: 12, textAlign: 'center' }}>*O gráfico está limitado aos 10 principais valores.</div>
                    </div>
                </div>
            </div>
        ) : (
                <div style={{
                    display: 'flex',
                    flexDirection: 'flex-end',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh'
                }}>
                    <CircularProgress style={{ margin: 4 }} />
                    <b style={{ marginTop: 4 }}>Carregando...</b>
                </div>
            )
    );
};


const mapStateToProps = ({ dashboard }) => ({ data: dashboard.data });
const mapDispatchToProps = (dispatch) => bindActionCreators({ load, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
