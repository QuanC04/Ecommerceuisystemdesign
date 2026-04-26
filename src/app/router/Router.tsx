import { createContext, useContext, useState, ReactNode } from "react";

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
  params: Record<string, string>;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: "/",
  navigate: () => {},
  params: {},
});

export function useRouter() {
  return useContext(RouterContext);
}

export function useNavigate() {
  const { navigate } = useRouter();
  return navigate;
}

export function useParams() {
  const { params } = useRouter();
  return params;
}

interface RouterProps {
  children: ReactNode;
}

export function Router({ children }: RouterProps) {
  const [currentPath, setCurrentPath] = useState("/");
  const [params, setParams] = useState<Record<string, string>>({});

  const navigate = (path: string) => {
    const pathParts = path.split("/").filter(Boolean);
    const routeParts = currentPath.split("/").filter(Boolean);

    const newParams: Record<string, string> = {};

    setCurrentPath(path);
    setParams(newParams);
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate, params }}>
      {children}
    </RouterContext.Provider>
  );
}

interface RouteProps {
  path: string;
  component: React.ComponentType<any>;
}

export function Route({ path, component: Component }: RouteProps) {
  const { currentPath } = useRouter();

  if (path === currentPath) {
    return <Component />;
  }

  const pathParts = path.split("/").filter(Boolean);
  const currentParts = currentPath.split("/").filter(Boolean);

  if (pathParts.length !== currentParts.length) {
    return null;
  }

  const params: Record<string, string> = {};
  let matches = true;

  for (let i = 0; i < pathParts.length; i++) {
    if (pathParts[i].startsWith(":")) {
      params[pathParts[i].slice(1)] = currentParts[i];
    } else if (pathParts[i] !== currentParts[i]) {
      matches = false;
      break;
    }
  }

  if (matches) {
    return <Component />;
  }

  return null;
}

interface LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Link({ to, children, className, onClick }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
