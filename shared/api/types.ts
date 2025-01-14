type Article = {
  id: string;
  title: string;
  subtitle: string;
  photo: {
    source: string;
    width: number;
    height: number;
  };
};

type Employee = {
  id: string;
  name: string;
  photo: string;
  role?: string;
  desc?: string;
};

type Articles = Article[];
type Staff = Employee[];
