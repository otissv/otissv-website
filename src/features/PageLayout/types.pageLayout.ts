import { NavigateFn } from "reach__router";
import { Location as HLocation, LocationState } from "history";
export type WindowLocation<S = LocationState> = Window["location"] &
  HLocation<S>;

export interface PageProps<
  DataType extends Record<string, any>,
  PageContextType extends Record<string, any>,
  LocationState extends unknown
> {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly location: WindowLocation<LocationState>;
  readonly navigate: NavigateFn;
  readonly pageContext: PageContextType;
  readonly params: Record<string, string>;
  readonly path: string;
  readonly data: DataType;
  readonly pathContext: Record<string, any>;
  readonly uri: string;
  readonly pageResources: {
    readonly component: React.Component;
    readonly json: {
      readonly data: DataType;
      readonly pageContext: PageContextType;
    };
    readonly page: {
      readonly componentChunkName: string;
      readonly path: string;
      readonly webpackCompilationHash: string;
      readonly matchPath?: string;
    };
  };
}
