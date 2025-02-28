declare module "wix-badges-backend.v2" {
  interface Badge {
      /** Badge id */
      _id?: string;
      /** Badge title */
      title?: string;
      /** Badge description */
      description?: string;
      /** Badge background color in 6-digit color hex in upper case (e.g. #FFFFFF) */
      backgroundColor?: string;
      /** Badge text color in 6-digit color hex in upper case (e.g. #FFFFFF) */
      textColor?: string;
      /** Badge icon SVG as 'https://...' */
      icon?: string;
      /** Id of role/group in groups service that badge assignee belongs to */
      roleId?: string;
      /**
       * Indicates whether badge has permissions.
       *
       * Badges can have special permissions to access specific members-only pages.
       *
       * When the value is set to **true**, badge permissions can be managed in
       * [permissions table](https://www.wix.com/my-account/site-selector/?buttonText=Manage%20Permissions&amp;title=Select%20a%20Site&amp;autoSelectOnSingleSite=true&amp;actionUrl=https://www.wix.com/dashboard/{{metaSiteId}}/member-permissions/roles/manage-permissions).
       * Site members will receive relevant permissions once assigned such badge.
       *
       * When the value is set to **false**, badge has no associated permissions
       * and is not visible in permissions table.
       * Site member will not receive any permissions once assigned such badge.
       */
      hasPermissions?: boolean;
      /** Badge url keyword operator */
      slug?: string;
      /** Date when badge was created */
      createDate?: Date | null;
      /** Date when badge was last updated */
      updateDate?: Date | null;
  }
  interface CreateRequest {
      /** Badge title */
      title: string;
      /** Badge description */
      description?: string;
      /** Badge background color in 6-digit upper-cased color hex (e.g. #FFFFFF) */
      backgroundColor: string;
      /** Badge text color in 6-digit upper-cased color hex (e.g. #FFFFFF) */
      textColor: string;
      /** Badge icon SVG as 'https://...' */
      icon?: string;
      /** Indicates whether badge has permissions */
      hasPermissions?: boolean;
  }
  interface CreateResponse {
      /** Created badge */
      badge?: Badge;
  }
  interface UpdateRequest {
      /** Badge id */
      _id: string;
      /** Badge title */
      title?: string | null;
      /** Badge description */
      description?: string | null;
      /** Badge background color in 6-digit upper-cased color hex (e.g. #FFFFFF) */
      backgroundColor?: string | null;
      /** Badge text color in 6-digit upper-cased color hex (e.g. #FFFFFF) */
      textColor?: string | null;
      /** Badge icon SVG as 'https://...' */
      icon?: string | null;
      /** Indicates whether badge has permissions */
      hasPermissions?: boolean | null;
  }
  interface UpdateResponse {
      /** Updated badge */
      badge?: Badge;
  }
  interface ListRequest {
      /** Limit the number of badges to return */
      limit?: number | null;
      /** Default offset is 0. */
      offset?: number | null;
  }
  interface ListResponse {
      /** List of badges in a site */
      badges?: Badge[];
  }
  interface QueryRequest {
      /** Filter criteria */
      filter?: Record<string, any> | null;
      /** Sorting criteria */
      sort?: Sorting[];
      /** Result paging data */
      paging?: Paging;
  }
  interface Sorting {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder;
      /**
       * When `field_name` is a property of repeated field that is marked as `MATCH_ITEMS` and sort should be done by
       * a specific element from a collection, filter can/should be provided to ensure correct sort value is picked.
       *
       * If multiple filters are provided, they are combined with AND operator.
       *
       * Example:
       * Given we have document like {"id": "1", "nestedField": [{"price": 10, "region": "EU"}, {"price": 20, "region": "US"}]}
       * and `nestedField` is marked as `MATCH_ITEMS`, to ensure that sorting is done by correct region, filter should be
       * { fieldName: "nestedField.price", "select_items_by": [{"nestedField.region": "US"}] }
       * @internal
       */
      selectItemsBy?: Record<string, any>[] | null;
  }
  enum SortOrder {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging {
      /** Limit the number of badges to return */
      limit?: number | null;
      /** Default offset is 0. */
      offset?: number | null;
  }
  interface QueryResponse {
      /** List of sorted badges in a site that satisfy filter and paging */
      badges?: Badge[];
      /** Total count of badges in a site that satisfy given filter */
      count?: string;
  }
  interface GetRequest {
      /** Badge id */
      _id: string;
  }
  interface GetResponse {
      /** Badge */
      badge?: Badge;
  }
  interface DeleteRequest {
      /** Badge id */
      _id: string;
  }
  interface DeleteResponse {
  }
  interface CountRequest {
      /** Filter criteria used for counting */
      filter?: Record<string, any> | null;
  }
  interface CountResponse {
      /** Badges count */
      count?: string;
  }
  interface AssignBadgeRequest {
      /** Badge id */
      _id: string;
      /** Ids of members this badge should be assigned to */
      memberIds: string[];
  }
  interface AssignBadgeResponse {
      /** Ids of members given badge has been assigned to */
      memberIds?: string[];
  }
  interface BadgeAssigned {
      /** Member ids who have the given badge assigned */
      memberId?: string;
  }
  interface UnassignBadgeRequest {
      /** Badge id */
      _id: string;
      /** Ids of members given badge will be removed from */
      memberIds: string[];
  }
  interface UnassignBadgeResponse {
  }
  interface BadgeUnassigned {
      /** Member id who had the badge unassigned */
      memberId?: string;
  }
  interface ListMembersRequest {
      /** Badge id */
      _id: string;
  }
  interface ListMembersResponse {
      /** Member ids who have the given badge assigned */
      memberIds?: string[];
  }
  interface ListMembersBadgeIdsRequest {
      /** Ids of members whose badge ids should be listed */
      memberIds: string[];
  }
  interface ListMembersBadgeIdsResponse {
      /** List of members with Ids of badges assigned to them */
      memberBadgeIds?: MemberBadgeIds[];
  }
  interface MemberBadgeIds {
      /** Member id */
      memberId?: string;
      /** Badge ids assigned to a given member */
      badgeIds?: string[];
  }
  interface GetBadgeCountersRequest {
  }
  interface GetBadgeCountersResponse {
      /** Ids of badges with a member count with this assigned badge */
      badgeMemberCounts?: BadgeMemberCount[];
  }
  interface BadgeMemberCount {
      /** Badge id */
      badgeId?: string;
      /** Number of members with assigned badge */
      memberCount?: number;
  }
  interface UpdateBadgesOrderRequest {
      /** Ordered badges ids */
      badgeIds?: string[];
  }
  interface UpdateBadgesOrderResponse {
      /** Reordered badges */
      badges?: Badge[];
  }
  interface DomainEvent extends DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
      _id?: string;
      /**
       * Assumes actions are also always typed to an entity_type
       * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
       */
      entityFqdn?: string;
      /**
       * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
       * This is although the created/updated/deleted notion is duplication of the oneof types
       * Example: created/updated/deleted/started/completed/email_opened
       */
      slug?: string;
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format and UTC time. For example: 2020-04-26T13:57:50.699Z */
      eventTime?: Date | null;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
       */
      triggeredByAnonymizeRequest?: boolean | null;
      /** If present, indicates the action that triggered the event. */
      originatedFrom?: string | null;
      /**
       * A sequence number defining the order of updates to the underlying entity.
       * For example, given that some entity was updated at 16:00 and than again at 16:01,
       * it is guaranteed that the sequence number of the second update is strictly higher than the first.
       * As the consumer, you can use this value to ensure that you handle messages in the correct order.
       * To do so, you will need to persist this number on your end, and compare the sequence number from the
       * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
       */
      entityEventSequence?: string | null;
  }
  /** @oneof */
  interface DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
  }
  interface EntityCreatedEvent {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
      /** Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity */
      restoreInfo?: RestoreInfo;
      /**
       * WIP
       * @internal
       */
      additionalMetadataAsJson?: string | null;
  }
  interface RestoreInfo {
      deletedDate?: Date | null;
  }
  interface EntityUpdatedEvent {
      /**
       * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
       * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
       * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
       */
      currentEntityAsJson?: string;
      /**
       * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
       * wont populate it / have any reference to it in the API.
       * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
       * the developer should send only the new (current) entity.
       * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
       * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
       * @internal
       * @deprecated
       */
      previousEntityAsJson?: string | null;
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
      /**
       * WIP
       * @internal
       */
      additionalMetadataAsJson?: string | null;
  }
  interface EntityDeletedEvent {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
      /**
       * WIP
       * @internal
       */
      additionalMetadataAsJson?: string | null;
  }
  interface ActionEvent {
      bodyAsJson?: string;
  }
  interface MessageEnvelope {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData extends IdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * Create badge
   * @param title - Badge title
   * @internal
   * @documentationMaturity preview
   * @requiredField options.backgroundColor
   * @requiredField options.textColor
   * @requiredField title
   * @permissionId badges.manage
   * @adminMethod
   * @deprecated
   * @replacedBy com.wixpress.badges.v3.BadgesServiceV3.CreateBadge
   * @targetRemovalDate 2022-03-31
   */
  function create(title: string, options?: CreateOptions): Promise<CreateResponse>;
  interface CreateOptions {
      /** Badge description */
      description?: string;
      /** Badge background color in 6-digit upper-cased color hex (e.g. #FFFFFF) */
      backgroundColor: string;
      /** Badge text color in 6-digit upper-cased color hex (e.g. #FFFFFF) */
      textColor: string;
      /** Badge icon SVG as 'https://...' */
      icon?: string;
      /** Indicates whether badge has permissions */
      hasPermissions?: boolean;
  }
  /**
   * Update badge
   * @param _id - Badge id
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @permissionId badges.manage
   * @adminMethod
   * @deprecated
   * @replacedBy com.wixpress.badges.v3.BadgesServiceV3.UpdateBadge
   * @targetRemovalDate 2022-03-31
   */
  function update(_id: string, options?: UpdateOptions): Promise<UpdateResponse>;
  interface UpdateOptions {
      /** Badge title */
      title?: string | null;
      /** Badge description */
      description?: string | null;
      /** Badge background color in 6-digit upper-cased color hex (e.g. #FFFFFF) */
      backgroundColor?: string | null;
      /** Badge text color in 6-digit upper-cased color hex (e.g. #FFFFFF) */
      textColor?: string | null;
      /** Badge icon SVG as 'https://...' */
      icon?: string | null;
      /** Indicates whether badge has permissions */
      hasPermissions?: boolean | null;
  }
  /**
   * List all badges in a site
   * @internal
   * @documentationMaturity preview
   * @permissionId BADGES.READ
   * @deprecated
   * @replacedBy com.wixpress.badges.v3.BadgesServiceV3.ListBadges
   * @targetRemovalDate 2022-03-31
   */
  function list(options?: ListOptions): Promise<ListResponse>;
  interface ListOptions {
      /** Limit the number of badges to return */
      limit?: number | null;
      /** Default offset is 0. */
      offset?: number | null;
  }
  /**
   * Query badges in a site
   * @internal
   * @documentationMaturity preview
   * @permissionId BADGES.READ
   * @deprecated
   * @replacedBy com.wixpress.badges.v3.BadgesServiceV3.QueryBadges
   * @targetRemovalDate 2022-03-31
   */
  function query(options?: QueryOptions): Promise<QueryResponse>;
  interface QueryOptions {
      /** Filter criteria */
      filter?: Record<string, any> | null;
      /** Sorting criteria */
      sort?: Sorting[];
      /** Result paging data */
      paging?: Paging;
  }
  /**
   * Get a badge
   * @param _id - Badge id
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @permissionId BADGES.READ
   * @deprecated
   * @replacedBy com.wixpress.badges.v3.BadgesServiceV3.GetBadge
   * @targetRemovalDate 2022-03-31
   */
  function get(_id: string): Promise<GetResponse>;
  /**
   * Delete a badge
   * @param _id - Badge id
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @permissionId badges.manage
   * @adminMethod
   * @deprecated
   * @replacedBy com.wixpress.badges.v3.BadgesServiceV3.DeleteBadge
   * @targetRemovalDate 2022-03-31
   */
  function _delete(_id: string): Promise<void>;
  /**
   * Count badges in a site
   * @internal
   * @documentationMaturity preview
   * @permissionId BADGES.READ
   * @deprecated
   * @replacedBy com.wixpress.badges.v3.BadgesServiceV3.CountBadges
   * @targetRemovalDate 2022-03-31
   */
  function count(options?: CountOptions): Promise<CountResponse>;
  interface CountOptions {
      /** Filter criteria used for counting */
      filter?: Record<string, any> | null;
  }
  /**
   * Assign a badge to the given members
   * @param _id - Badge id
   * @param memberIds - Ids of members this badge should be assigned to
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField memberIds
   * @permissionId BADGES.ASSIGN
   * @adminMethod
   * @deprecated
   * @replacedBy com.wixpress.badges.v3.BadgesServiceV3.AssignBadge
   * @targetRemovalDate 2022-03-31
   */
  function assignBadge(_id: string, memberIds: string[]): Promise<AssignBadgeResponse>;
  /**
   * Remove badge from given members
   * @param _id - Badge id
   * @param memberIds - Ids of members given badge will be removed from
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField memberIds
   * @permissionId BADGES.ASSIGN
   * @adminMethod
   * @deprecated
   * @replacedBy com.wixpress.badges.v3.BadgesServiceV3.UnassignBadge
   * @targetRemovalDate 2022-03-31
   */
  function unassignBadge(_id: string, memberIds: string[]): Promise<void>;
  /**
   * Return list of members that have the given badge
   * @param _id - Badge id
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @permissionId BADGES.READ
   * @deprecated
   * @replacedBy com.wixpress.badges.v3.BadgesServiceV3.ListMembers
   * @targetRemovalDate 2022-03-31
   */
  function listMembers(_id: string): Promise<ListMembersResponse>;
  /**
   * Return list of badge ids assigned to a given members
   * @param memberIds - Ids of members whose badge ids should be listed
   * @internal
   * @documentationMaturity preview
   * @requiredField memberIds
   * @permissionId BADGES.READ
   * @deprecated
   * @replacedBy com.wixpress.badges.v3.BadgesServiceV3.ListMembersBadgeIds
   * @targetRemovalDate 2022-03-31
   */
  function listMembersBadgeIds(memberIds: string[]): Promise<ListMembersBadgeIdsResponse>;
  /**
   * Return badge ids with a count of members they are assigned to
   * @internal
   * @documentationMaturity preview
   * @permissionId BADGES.READ
   * @deprecated
   * @replacedBy com.wixpress.badges.v3.BadgesServiceV3.GetMemberCountsPerBadge
   * @targetRemovalDate 2022-03-31
   */
  function getBadgeCounters(): Promise<GetBadgeCountersResponse>;
  /**
   * Update badges order
   * @internal
   * @documentationMaturity preview
   * @permissionId badges.manage
   * @adminMethod
   * @deprecated
   * @replacedBy com.wixpress.badges.v3.BadgesServiceV3.UpdateBadgesDisplayOrder
   * @targetRemovalDate 2022-03-31
   */
  function updateBadgesOrder(options?: UpdateBadgesOrderOptions): Promise<UpdateBadgesOrderResponse>;
  interface UpdateBadgesOrderOptions {
      /** Ordered badges ids */
      badgeIds?: string[];
  }
  
  export { ActionEvent, AssignBadgeRequest, AssignBadgeResponse, Badge, BadgeAssigned, BadgeMemberCount, BadgeUnassigned, CountOptions, CountRequest, CountResponse, CreateOptions, CreateRequest, CreateResponse, DeleteRequest, DeleteResponse, DomainEvent, DomainEventBodyOneOf, EntityCreatedEvent, EntityDeletedEvent, EntityUpdatedEvent, GetBadgeCountersRequest, GetBadgeCountersResponse, GetRequest, GetResponse, IdentificationData, IdentificationDataIdOneOf, ListMembersBadgeIdsRequest, ListMembersBadgeIdsResponse, ListMembersRequest, ListMembersResponse, ListOptions, ListRequest, ListResponse, MemberBadgeIds, MessageEnvelope, Paging, QueryOptions, QueryRequest, QueryResponse, RestoreInfo, SortOrder, Sorting, UnassignBadgeRequest, UnassignBadgeResponse, UpdateBadgesOrderOptions, UpdateBadgesOrderRequest, UpdateBadgesOrderResponse, UpdateOptions, UpdateRequest, UpdateResponse, WebhookIdentityType, _delete, assignBadge, count, create, get, getBadgeCounters, list, listMembers, listMembersBadgeIds, query, unassignBadge, update, updateBadgesOrder };
}
