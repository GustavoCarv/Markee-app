import { Status } from 'resources/files'
import { ReactComponent as LoadingSVG } from '../../../assets/loading.svg'
import { ReactComponent as CheckedSVG } from '../../../assets/checked.svg'
import { ReactComponent as PendingSVG } from '../../../assets/pending.svg'

import styled, { keyframes } from 'styled-components/macro'

export type StatusIconProps = {
  status: Status
  className?: string
}

function StatusIcon ({ status = 'saved', className }: StatusIconProps) {
  const Comp = {
    saving: AnimatedLoading,
    saved: CheckedSVG,
    editing: PendingSVG,
  }[status]
  return <Comp className={className} />
}

const rotating = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(359deg)
    }
`

const AnimatedLoading = styled(LoadingSVG)`
    animation: ${rotating} 1s infinite linear ;
`

export { StatusIcon }
