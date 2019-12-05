import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CircularProgress } from '@material-ui/core';
import Chart from "react-google-charts";

import { load, setTitle } from './store/ducks';


export const Dashboard = ({ data, load, setTitle }) => {

    useEffect(() => {
        localStorage.getItem('access') && load();

        setTitle('Dashboard');
    }, [load, setTitle]);

    const options = {
        legend: "none",
        chartArea: { width: '90%' },
        bar: { groupWidth: "40" },
        fontSize: 8,
        animation: {
            duration: 1000,
            startup: true,
        },
    };

    return (
        data !== {} ? (
            <>
                <div style={{ height: '100%', overflowY: 'auto', backgroundColor: 'white' }}>
                    <div style={{ padding: 10 }}>
                        <div style={{ fontSize: 12, textAlign: 'left', paddingLeft: 20 }}>
                            Quantidade de roteirizações por funcionário
                        </div>

                        <Chart
                            chartType="ColumnChart"
                            width="100%"
                            height='100%'
                            data={data['employees']}
                            options={{
                                ...options,
                                vAxis: {
                                    logScale: false
                                }
                            }}
                        />
                    </div>

                    <div style={{ padding: 10 }}>
                        <div style={{ fontSize: 12, textAlign: 'left', paddingLeft: 20 }}>
                            Quantidade de roteirizações por cliente
                            </div>

                        <Chart
                            chartType="BarChart"
                            width="100%"
                            height='100%'
                            data={data['clients']}
                            options={{
                                ...options,
                                hAxis: {
                                    logScale: false
                                }
                            }}
                        />
                    </div>
                    <div style={{ fontSize: 12, textAlign: 'center' }}>*O gráfico está limitado aos 10 principais valores.</div>
                </div>
            </>
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
const mapDispatchToProps = dispatch => bindActionCreators({ load, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
