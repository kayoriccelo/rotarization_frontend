import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { StyledRoot, StyledTabs, StyledTab } from './styled';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {children}
        </div>
    );
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
};

export default function TabCustom(props) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => setValue(newValue);

    return (
        <StyledRoot>
            <StyledTabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
                aria-label="scrollable force tabs example"
            >
                {props.tabsTitle
                    .map((tabTitle, index) => {
                        return (
                            <StyledTab
                                label={tabTitle.label}
                                icon={tabTitle.icon}
                                {...a11yProps(index)}
                            />
                        )
                    })
                }
            </StyledTabs>            

            {props.children
                .map((item, index) => {
                    return (
                        <TabPanel value={value} index={index}>
                            {item}
                        </TabPanel>
                    )
                })
            }
        </StyledRoot>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
