export type User = {
    id: string;
    username: string;
    name: string;
    image?: string;        
    isVIP?: boolean;
    isFriend?: boolean; //temporary
}

export type PostType = {
    id: string;
    user: User;
    createdAt: string;
    content: string;
    image?: string;
    numberOfComments?: number;
    numberOfRetweets?: number;
    numberOfLikes?: number;
    impressions?: number;
}

export type CommentType = {
    id: string;
    user: User;
    createdAt: string;
    content: string;
    //image?: string;
}


