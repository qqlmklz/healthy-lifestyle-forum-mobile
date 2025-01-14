type Article = {
  id: number;
  title: string;
  subtitle: string;
  photo: {
    source: string;
    width: number;
    height: number;
  };
};

type Employee = {
  id: number;
  name: string;
  photo: string;
};

type Articles = Article[];
type Staff = Employee[];
