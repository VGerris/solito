'use client'
import { TextProps, Text } from 'react-native'

import { LinkCore } from './core'
import { LinkCoreProps } from './LinkCoreProps'
import { Component } from 'react'

type TextLinkProps = LinkCoreProps & { textProps?: TextProps }

function TextLink({ textProps, ...props }: TextLinkProps) {
  return (
    <LinkCore
      {...props}
      Component={Component}
      componentProps={{ selectable: false, ...textProps }}
    />
  )
}

export { TextLink }
export type { TextLinkProps }
