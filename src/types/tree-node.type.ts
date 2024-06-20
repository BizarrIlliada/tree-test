export interface ITreeItem {
  id: number;
  parent_id: number;
  space_id: number;
  instance_user_id: number;
  name: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface ITreeNode extends ITreeItem {
  children: ITreeNode[],
}
