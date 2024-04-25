
export const GET_POSTS_SIGN_QUERY = `mutation($singData: MemberDetails!) {
  memberRegister(
    input:$singData
  )
}
  `;
  export const GET_POSTS_LOGIN_QUERY =`mutation($username:String!,$password:String!){
    templateMemberLogin(
      username:$username
      password:$password
    )
  }`


  export const GET_POSTS_LIST_QUERY = `query($limit: Int!,$offset: Int!,$categoriesId:Int!){
    spaceList(limit: $limit,offset: $offset,categoriesId:$categoriesId){
      spacelist{
        id
        spaceName
        spaceSlug
        spaceDescription
        imagePath
        categories{
          categoryName
        }
        
  
      }
    }
  }
  `;


  export const GET_POSTS_SLUG_QUERY = `query($spaceId: Int!){
    spaceDetails(spaceId: $spaceId){
    
        id
        spaceName
        spaceSlug
        spaceDescription
        imagePath
        categories{
          categoryName
        }
    
    }
  }
  `;

  export const GET_POSTS_CATEGORY_QUERY = `query($spaceId:Int!){
    PagesAndPageGroupsUnderSpace(spaceId:$spaceId){
      pages{
        id
        pageName
        # content
        pagegroupId
        # parentId
        createdOn
  }
      subpages{
           id
        subpageName
        # conent
        parentId
        pageGroupId
      }
      pagegroups{
        id
        pagegroupName
        createdOn
  }
      
  }
  }
  `;



  // list

  export const GET_POST_CATEGORY_LIST=`query($categoryGroupId: Int, $hierarchyLevel: Int,$checkEntriesPresence:Int,$limit: Int!,$offset: Int!){
    categoriesList(categoryGroupId:$categoryGroupId,limit:$limit,offset:$offset,hierarchyLevel:$hierarchyLevel,checkEntriesPresence:$checkEntriesPresence){
     categories{
      categoryName
      categorySlug
      parentId
      id
      createdOn
    }
      count
    }
  }`