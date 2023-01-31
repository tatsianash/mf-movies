import { jsx as _jsx } from "react/jsx-runtime";
import { AppShell as MantineAppShell, Header, Title } from '@mantine/core';
export const AppShell = ({ title }) => (_jsx(MantineAppShell, Object.assign({ header: _jsx(Header, Object.assign({ height: 60, p: "xs", sx: { display: 'flex' } }, { children: _jsx(Title, { children: title }) })) }, { children: _jsx("div", { children: "hello" }) })));
