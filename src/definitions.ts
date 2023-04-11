export interface OktaIdxPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
