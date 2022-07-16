export type Status = 'editing' | 'saving' | 'saved'

export type FileType = {
  id: string
  name: string
  content: string
  active: boolean
  status: Status
}
