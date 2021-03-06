// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ExpandOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExpandOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExpandOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExpandOutlinedSvg}></AntdIcon>;
};

ExpandOutlined.displayName = 'ExpandOutlined';
ExpandOutlined.inheritAttrs = false;
export default ExpandOutlined;